import { clientSideFunction } from "../utils/client-utils";

export default function ClientRoutePage() {
    const result=clientSideFunction();
  return <h1>Client Route {result}</h1>;
}
