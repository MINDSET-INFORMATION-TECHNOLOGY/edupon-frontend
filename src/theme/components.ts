export const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'md',
    },
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
          _disabled: {
            bg: 'disabled.500',
          },
        },
        _active: {
          bg: 'brand.700',
        },
        _disabled: {
          bg: 'disabled.500',
          cursor: 'not-allowed',
          opacity: 1,
        },
      },
      outline: {
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
          borderColor: 'brand.600',
        },
        _active: {
          bg: 'brand.100',
          borderColor: 'brand.700',
        },
      },
      ghost: {
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
        },
        _active: {
          bg: 'brand.100',
        },
      },
    },
    defaultProps: {
      variant: 'solid',
      size: 'md',
    },
  },
  Input: {
    variants: {
      outline: {
        field: {
          borderColor: 'gray.300',
          _hover: {
            borderColor: 'brand.500',
          },
          _focus: {
            borderColor: 'brand.500',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
          },
        },
      },
    },
    defaultProps: {
      variant: 'outline',
    },
  },
  Textarea: {
    variants: {
      outline: {
        borderColor: 'gray.300',
        _hover: {
          borderColor: 'brand.500',
        },
        _focus: {
          borderColor: 'brand.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
        },
      },
    },
    defaultProps: {
      variant: 'outline',
    },
  },
  Link: {
    baseStyle: {
      color: 'brand.500',
      _hover: {
        color: 'brand.600',
        textDecoration: 'underline',
      },
    },
  },
  Card: {
    baseStyle: {
      container: {
        borderRadius: 'lg',
        boxShadow: 'sm',
        _hover: {
          boxShadow: 'md',
        },
      },
    },
  },
  Badge: {
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
      },
      subtle: {
        bg: 'brand.50',
        color: 'brand.700',
      },
    },
  },
};
