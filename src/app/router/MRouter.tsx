import React from "react";
import { History } from "history";
import { HashRouterProps, Router } from "react-router-dom";

export interface MRouterProps extends Omit<HashRouterProps, "window"> {
    history: History
}

const MRouter = (props: MRouterProps) => {
    const { history, ...restProps } = props
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    })

    React.useLayoutEffect(() => history.listen(setState), [history])

    return <Router {...restProps} location={state.location} navigationType={state.action} navigator={history} />
}

export default MRouter