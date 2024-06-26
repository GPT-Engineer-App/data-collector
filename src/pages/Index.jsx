import { Container, VStack, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Invalid email address" });
      valid = false;
    } else {
      setErrors({ ...errors, email: "" });
    }

    if (valid) {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack as="form" spacing={4} width="100%" onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="email" isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email &amp;&amp; <FormErrorMessage>{errors.email}</FormErrorMessage>}
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Submit</Button>
      </VStack>
    </Container>
  );
};

export default Index;