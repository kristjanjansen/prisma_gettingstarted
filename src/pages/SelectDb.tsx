import React, { FC, useState, useEffect } from "react";

import CardContainer from "../components/CardContainer";
import GridContainer from "../components/GridContainer";
import DialogHeader from "../components/DialogHeader";
import DialogBody from "../components/DialogBody";
import DialogFooter from "../components/DialogFooter";
import CardButton from "../components/CardButton";
import MysqlIcon from "../components/MysqlIcon";
import MongoIcon from "../components/MongoIcon";
import PostgresIcon from "../components/PostgresIcon";
import SqliteIcon from "../components/SqliteIcon";
import Button from "../components/Button";

const log = [
  { message: "Get started by selecting a database", delay: 200 },
]

const options = [
  {
    title: "PostgreSQL",
    icon: <PostgresIcon />,
    subtitle: "Requires a running PostgreSQL database",
    disabled: false
  },
  {
    title: "MySQL",
    icon: <MysqlIcon />,
    subtitle: "Requires a running MySQL database",
    disabled: false
  },
  {
    title: "SQLite",
    icon: <SqliteIcon />,
    subtitle: "Easiest to set up",
    disabled: false
  },
  {
    title: "MongoDB",
    icon: <MongoIcon />,
    subtitle: "Coming soon",
    disabled: true
  }
];

const SelectDb: FC<{ onPrev?: Function; onNext?: Function; onLog?: Function }> = ({
  onNext = () => null,
  onLog = () => null
}) => {
  let [step, setStep] = useState(0);

  useEffect(() => {
    onLog(log);
  }, []);
  
  return (
    <CardContainer>
      <DialogHeader>Get started by selecting a database</DialogHeader>
      <DialogBody>
        <GridContainer cols="1fr 1fr">
          {options.map(({ title, subtitle, icon, disabled }, i) => (
            <CardButton
              key={i}
              title={title}
              subtitle={subtitle}
              icon={icon}
              selected={i == step}
              disabled={disabled}
              onClick={() => setStep(i)}
            />
          ))}
        </GridContainer>
      </DialogBody>
      <DialogFooter>
        &nbsp;
        <Button onClick={() => onNext()}>Next →</Button>
      </DialogFooter>
    </CardContainer>
  );
};

export default SelectDb;
