import { useState } from "react";

import RutasPublicas from "./Public/RutasPublicas";
import RutasPrivadas from "./Private/RutasPrivadas";

const Navigation = () => {
  const [verificado, setVerificado] = useState(false);

  return <>{verificado ? <RutasPrivadas /> : <RutasPublicas />}</>;
};

export default Navigation;
