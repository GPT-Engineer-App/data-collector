import { useState } from "react";
import { Container, VStack, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors({ ...errors, email: emailValid ? "" : "Invalid email address" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email) {
      console.log("Form submitted", formData);
      // Handle form submission
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack as="form" spacing={4} width="100%" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email &amp;&amp; <FormErrorMessage>{errors.email}</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Submit</Button>
      </VStack>
    </Container>
  );
};

export default Index;