import React, { useEffect, useMemo } from "react";

import RutasPublicas from "./Public/RutasPublicas";
import RutasPrivadas from "./Private/RutasPrivadas";
import { useAuthStore } from "../hooks";

const Navigation = () => {
  const { status, checkoutSession } = useAuthStore();
  useEffect(() => {
    setTimeout(() => {
      checkoutSession();
    }, 1000);
  }, []);

  const verificado = useMemo(() => status === "authenticated", [status]);

  if (status == "checking") {
    return (
      <div className="publicLayout" style={{ flexDirection: "column" }}>
        <h1>Swingr</h1>
        <img
          src="https://static-eu-cdn.eporner.com/gallery/Db/5o/HBwjp0S5oDb/6556251-vaginal-porn-gif-sex-393582-sm.gif"
          width={300}
          height={300}
          style={{ borderRadius: "25px" }}
        />
      </div>
    );
  }

  if (verificado) {
    return <RutasPrivadas />;
  } else {
    return <RutasPublicas />;
  }
};

export default React.memo(Navigation);
