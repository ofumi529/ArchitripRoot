import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  width?: number; // px
  children: React.ReactNode;
}

export default function Drawer({ open, onClose, side = 'left', width = 300, children }: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          {side === 'left' && (
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className={clsx('h-full bg-white shadow-xl overflow-y-auto', `w-[${width}px]`)}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          )}

          {side === 'right' && <div className="flex-1" onClick={onClose} />}

          {side === 'right' && (
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel
                className={clsx('h-full bg-white shadow-xl overflow-y-auto', `w-[${width}px]`)}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          )}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
