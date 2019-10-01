import { storiesOf } from "@storybook/react";
import * as React from "react";
import HelloWorld from "./hello-world.component";

storiesOf("HelloWorld", module).add("default", () => <HelloWorld />);
