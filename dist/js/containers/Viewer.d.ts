import * as React from "react";
export interface Props {
    compiler: string;
    framework: string;
}
export declare class Hello extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
