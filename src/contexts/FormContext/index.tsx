import React, { createContext, useState } from "react";

// Define the initial state of the context
interface FormContextState {
  formMap: Map<string, any> | null;
}

// Create the context
export const FormContext = createContext<FormContextState>({
  formMap: null,
});

// Create a provider component to wrap your app with
export const FormProvider: React.FC<any> = ({ children }) => {
  return (
    <FormContext.Provider value={{ formMap: null }}>
      {children}
    </FormContext.Provider>
  );
};
