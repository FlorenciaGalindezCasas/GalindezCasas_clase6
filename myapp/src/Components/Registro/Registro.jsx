import React, { useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
  Container,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Registro/Registro.css"


function Registro() {
   const [show, setShow] = useState(false);

   const [formData, setFormData] = useState({
     name: {
       value: "",
       error:true,
     },
     lastname: {
       value: "",
       error: true,
     },
     email: {
       value: "",
       error: true,
     },
     tel: {
       value: "",
       error: true,
     },
     password: {
       value: "",
       error: true,
     },
     confirmpassword: {
       value: "",
       error: true,
     },
   });

   

   const handleChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: {
        value:value,
        error:false}
    })
   }

  const handleClick = () => setShow(!show);

  const isError =
    Object.values(formData).some((field) => field.value === "") ||
    (formData.password.value !== formData.confirmpassword.value &&
      Object.values(formData).every((field) => field.value !== ""));

    useEffect(()=>{
      let passwordError = false

      if (formData.password.value !== formData.confirmpassword.value){
        passwordError = true 
      }
        setFormData({
          ...formData,
          password: {
            ...formData.password,
            error: passwordError,
          },
          confirmpassword: {
            ...formData.confirmpassword,
            error: passwordError,
          },
        });
    }, [formData.password.value, formData.confirmpassword.value])

  return (
    <Container className="registro">
      <Heading as="h2" size="2xl">
        Registrarte ahora
      </Heading>
      <FormControl isRequired className="form" isInvalid={isError}>
        <FormLabel>Nombres</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name.value}
          placeholder="Nombres"
          onChange={handleChange}
          isInvalid={formData.name.error}
        />
        <FormLabel>Apellidos</FormLabel>
        <Input
          type="text"
          name="lastname"
          placeholder="Apellidos"
          value={formData.lastname.value}
          onChange={handleChange}
          isInvalid={formData.lastname.error}
        />

        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email.value}
          onChange={handleChange}
          isInvalid={formData.email.error}
        />
        <FormLabel>Teléfono</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+54" />
          <Input
            type="number"
            placeholder="Número de teléfono"
            name="tel"
            value={formData.tel.value}
            onChange={handleChange}
            isInvalid={formData.tel.error}
          />
        </InputGroup>
        <FormLabel>Password</FormLabel>
        <Tooltip
          hasArrow
          label="Introduce una combinación de al menos seis números, letras y signos de puntuación."
          bg="red.600"
        >
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Contraseña"
              name="password"
              value={formData.password.value}
              onChange={handleChange}
              isInvalid={formData.password.error}
            />
            <InputRightElement>
              <Button w="100%" size="sm" onClick={handleClick}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Tooltip>
        <FormLabel>Confirmar password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirma contraseña"
            name="confirmpassword"
            value={formData.confirmpassword.value}
            onChange={handleChange}
            isInvalid={formData.confirmpassword.error}
          />
          <InputRightElement>
            <Button w="100%" size="sm" onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!isError ? (
          <FormHelperText>Puedes continuar con el registro.</FormHelperText>
        ) : (
          <FormErrorMessage>
            {Object.values(formData).some((field) => field.value === "")
              ? "Hay campos vacíos."
              : "Las contraseñas no coinciden"}
          </FormErrorMessage>
        )}
        <Button type='submit' colorScheme="teal" variant="outline">
          Registrarte
        </Button>
      </FormControl>
    </Container>
  );
}

export default Registro