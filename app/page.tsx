"use client";

import Typo from "./ui/typo";
import Rect from "./ui/rect";
import { Tabs, Tab } from "@nextui-org/tabs";

export default function Home() {
    return (
        <main>
            <Tabs>
                <Tab title="space">
                    <Rect />
                </Tab>
                <Tab title="typography">
                    <Typo />
                </Tab>
            </Tabs>
        </main>
    );
}
