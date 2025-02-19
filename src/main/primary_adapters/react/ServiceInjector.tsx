import * as React from "react";

const createServicesContext = <
  Services extends Record<string, any>
>(): React.Context<Services> => {
  return React.createContext<Services>({} as Services);
};

export const makeServicesInjector = <Services extends Record<string, any>>(): {
  ServicesProvider: ({
    children,
    services,
  }: React.PropsWithChildren<{ services: Services }>) => JSX.Element;
  useService: <ServiceName extends keyof Services>(
    serviceName: ServiceName
  ) => Services[ServiceName];
} => {
  const ServiceContext = createServicesContext<Services>();

  const useService = <ServiceName extends keyof Services>(
    serviceName: ServiceName
  ): Services[ServiceName] => {
    return React.useContext(ServiceContext)[serviceName];
  };

  const ServicesProvider = ({
    children,
    services,
  }: React.PropsWithChildren<{ services: Services }>): JSX.Element => {
    return (
      <ServiceContext.Provider value={services}>
        {children}
      </ServiceContext.Provider>
    );
  };

  return {
    ServicesProvider,
    useService,
  };
};
