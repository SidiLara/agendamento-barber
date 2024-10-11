import { Colors } from "@/constants/Colors";

export interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  icon: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

export const primaryBtnSmall: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: Colors.primary,
    },

    icon: { color: Colors.white },
  },
  disabled: {
    button: {
      backgroundColor: Colors.secundary,
    },
    icon: { color: Colors.white },
  },
};

export const buttonBtnOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    icon: { color: Colors.primary },
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: Colors.secundary,
    },
    icon: { color: Colors.secundary },
  },
};

export const variants = {
  btnSPrimary: primaryBtnSmall,
  btnSOutline: buttonBtnOutline,
};
