'use client'

import { Input } from '@chakra-ui/react';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function InputBox({ search, setSearch }: Props) {

  return (
    <Input
      value={search}
      onChange={(e) => {setSearch(e.target.value)}}
      pl='40px'
      placeholder="search challenges"
      borderRadius="full"
      w='100%'
      _focus={{ boxShadow: 'none' }}
    />
  );
}

