import { Colors } from "@/constants/Colors";

export interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

export const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: Colors.primary,
    },
    title: { color: Colors.white },
    icon: { color: Colors.white },
  },
  disabled: {
    button: {
      backgroundColor: Colors.secundary,
    },
    title: { color: Colors.white },
    icon: { color: Colors.white },
  },
};

export const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    title: { color: Colors.primary },
    icon: { color: Colors.primary },
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: Colors.secundary,
    },
    title: { color: Colors.secundary },
    icon: { color: Colors.secundary },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
};
