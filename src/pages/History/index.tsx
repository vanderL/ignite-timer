import { HistoryContainer, HistoryList, Status } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { CyclesContext } from '../../contexts/CyclesContext';

export function History() {
  const { cycles } = useContext(CyclesContext)
  console.log(cycles)
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formatDistanceToNow(new Date(cycle.startDate), {
                  addSuffix: true,
                  locale: ptBr,
                })}</td>
                <td>
                  {cycle.finishedDate && <Status statusColor="green">Concluído</Status>}
                  {cycle.interruptDate && <Status statusColor="red">Interrompido</Status>}
                  {(!cycle.finishedDate && !cycle.interruptDate) && <Status statusColor="yellow">Em andamento</Status>}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}