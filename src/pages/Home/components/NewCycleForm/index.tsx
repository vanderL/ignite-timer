import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from 'react-hook-form'

import { useContext } from "react";
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext()


  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder='Dê um nome para o seu projeto'
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="Caldo" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder='00'
        {...register('minutesAmount', { valueAsNumber: true })}
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}

      />

      <span>minutos.</span>
    </FormContainer>
  )
}