import React, { ReactNode } from "react";
import { View } from "react-native";

interface RowProps {
  children: ReactNode; 
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {children}
    </View>
  );
};

export default Row;
