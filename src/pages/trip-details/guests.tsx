import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'

export function Guests() {
  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-sm text-zinc-400 truncate ">
              jessica@email.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Crithofer Brown
            </span>
            <span className="block text-sm text-zinc-400 truncate ">
              Crithofer@email.com
            </span>
          </div>
          <CircleCheck className="size-5 text-lime-300 shrink-0" />
        </div>
      </div>

      <Button variant="secundary">
        Gerenciar convidados
        <UserCog className="size-5" />
      </Button>
    </div>
  )
}
