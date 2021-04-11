import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

interface IpnutProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IpnutProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="email"
        variant="filled"
        size="lg"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        _hover={{
          bgColor: "gray.900"
        }}
        {...rest}
      />
    </FormControl>
  );
}