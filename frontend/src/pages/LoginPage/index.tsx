import { Button, FormControl, TextField } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import {
  Container,
  MainContent,
  DivImg,
  DivForm,
  DivLabels,
  FieldProps,
} from './styles';

const LoginPage: React.FC = () => {
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  });

  return (
    <Container>
      <MainContent>
        <DivImg>
          <img src="/logo-mini.svg" alt="" />
          <h1>
            Bem vindo ao sistema <b>Arsis</b>
          </h1>
          <ArrowForward />
        </DivImg>
        <DivForm>
          <Formik
            enableReinitialize
            initialValues={loginInfos}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <DivLabels>
                <FormControl>
                  <FieldProps
                    name="email"
                    component={TextField}
                    label="Your Email"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FieldProps
                    name="password"
                    component={TextField}
                    type="password"
                    label="Your Password"
                    required
                  />
                </FormControl>
                <Button variant="contained" color="primary" type="submit">
                  Continue
                  <ArrowForward />
                </Button>
              </DivLabels>
            </Form>
          </Formik>
        </DivForm>
      </MainContent>
    </Container>
  );
};

export default LoginPage;
