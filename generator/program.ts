import { ClientGenerator } from "./client-generator";
import { ServiceDiscovery } from "./service-discovery";

// tslint:disable:no-console
export class Program {
  public async run(serviceSpecifiers: string[]) {
    const services = await ServiceDiscovery.discover(); 

    const targetServices = serviceSpecifiers.length === 0
      ? services
      : services.filter((service) => serviceSpecifiers.includes(service.name));

    console.error("Selected %d services.", targetServices.length);
    await Promise.all(
      targetServices.map(async (service) => {
        try {
          await new ClientGenerator(service).emit();
          console.error("Generated '%s' api type", service.name);
        } catch (e) {
          console.error("Failed to generate code from '%s' service", service.name);
          console.error(e.stack);
        }
      }),
    );
  }
}

if (require.main === module) {
  const program = new Program();
  program.run(process.argv.slice(2))
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    });
}
// tslint:enable:no-console
