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

const primary: ButtonStyle = {
  button: {
    backgroundColor: Colors.orange,
  },
  title: { color: Colors.white },
  icon: { color: Colors.white },
};
