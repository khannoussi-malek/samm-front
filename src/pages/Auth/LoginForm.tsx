import React from 'react';

import {
  Alert,
  AlertDescription,
  Box,
  BoxProps,
  Button,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { Link as RouterLink } from 'react-router-dom';
import { useToastError } from '../../components/Toast';
import { useLogin } from './Auth.service';
import { FieldInput } from '../../components/FieldInput';



type LoginFormProps = BoxProps & { onSuccess: () => void };

export const LoginForm = ({
  onSuccess = () => undefined,
  ...rest
}: LoginFormProps) => {
  const { mutate: login, isLoading } = useLogin({
    onSuccess,
    onError: () => {
      toastError({
        title: "verify your credential",
      });
    },
  });
  const form = useForm({
    onValidSubmit: (values) => {
      login(values)
  },
  });
  const toastError = useToastError();


  return (
    <Box {...rest}>
      <Formiz autoForm  connect={form}>
        <Stack spacing="4">
          <FieldInput
            name="email"
            label="Email"
            required="email is required"
          />
          <FieldInput
            name="password"
            type="password"
            label="Password"
            required="password is required"
          />
          <Flex>
      
            <Button
              isLoading={isLoading}
              isDisabled={form.isSubmitted && !form.isValid}
              type="submit"
              variant="@primary"
              ms="auto"
            >
            Login
            </Button>
          </Flex>

        </Stack>
      </Formiz>
    </Box>
  );
};
