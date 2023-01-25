import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe o nome da Tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O Ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "P Ciclo precisa ser de no máximo 60 minutos"),

});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

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