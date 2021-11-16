import { useRouter } from "next/router";
import { useState } from "react";
import {
  Heading,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useUserContext from "context/user";
import routes from "@constants/routes";
import type { ILoginUser } from "@declarations/auth";

const loginFormSchema = yup.object({
  username: yup.string().required("Your username is required"),
  password: yup.string().required("Your password is required"),
});

const Login = () => {
  const router = useRouter();
  const { loginUser } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ILoginUser>({
    resolver: yupResolver(loginFormSchema),
  });
  const toast = useToast();

  const onSubmit = async (values: ILoginUser) => {
    try {
      setIsSubmitting(true);
      await loginUser(values);
      reset();
      toast({
        title: "Nice",
        description: "You're logged in",
        status: "success",
      });
      router.push(routes.home);
    } catch (error: any) {
      toast({
        title: "Opps!",
        description: error.message,
        status: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid minHeight="100vh" p={8} placeItems="center">
      <Grid gap={8}>
        <Heading size="md">Login</Heading>
        <Grid
          as="form"
          gap={8}
          onSubmit={handleSubmit(onSubmit)}
          id="login-form"
        >
          <Grid gap={4}>
            <FormControl isInvalid={Boolean(errors.username)}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" {...register("username")} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.password)}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </Grid>
          <Button type="submit" isLoading={isSubmitting}>
            Continue
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
