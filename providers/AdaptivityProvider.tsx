import React, {useMemo} from "react"
import {useWindowDimensions} from "@meta/hooks"
import { BREAKPOINTS } from "@meta/ui";

type Props = {
  children?: React.ReactNode;
};

export const AdaptivityContext = React.createContext({})
const AdaptivityProvider: React.FC<Props> = ({children}) => {
  const isMobile = useWindowDimensions(BREAKPOINTS.md);
    const mobileContext = useMemo(() => ({ isMobile }), [isMobile]);

    return (
        <AdaptivityContext.Provider value={mobileContext}>
            {children}
        </AdaptivityContext.Provider>
    )
};

export default AdaptivityProvider
