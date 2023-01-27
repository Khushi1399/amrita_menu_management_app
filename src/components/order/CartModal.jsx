import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Example(props) {
  // const [open, setOpen] = useState(true)

  // const cancelButtonRef = useRef(null)  initialFocus={cancelButtonRef}
  const displayCanteen = (item) => {
    const i =
      item == "itC"
        ? "IT Canteen"
        : item == "mainC"
        ? "Main Canteen"
        : "MBA Canteen";
    return i;
  };

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-200 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-purple-900"
                      >
                        View Your Order
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="text-sm text-gray-500">
                          <div className="grid grid-cols-5 font-bold">
                            {/* <label>Order</label> */}
                            <label className="pr-6 text-black-900  ">
                              Item
                            </label>
                            <label>Qty</label>
                            <label>Price</label>
                            <label>Canteen</label>
                            <label>Total Price</label>
                          </div>
                          {props.items.length > 0 ? (
                            props.items.map((item) => (
                              <div key={item.id} className="grid grid-cols-5">
                                <label className="pr-6 text-black-900">
                                  {item.itemName}
                                </label>
                                <label>x{item.itemQuantity}</label>
                                <label>{item.itemPrice}</label>
                                <label>
                                  {displayCanteen(item.canteenName)}
                                </label>
                                <label>
                                  {item.itemQuantity * item.itemPrice}
                                </label>
                              </div>
                            ))
                          ) : (
                            <label className="text-lg text-bold font-medium leading-6 text-gray-900">
                              You have not selected any items.
                            </label>
                          )}
                          {props.items.length > 0 && (
                            <label className="text-lg font-bold font-medium leading-6 text-pink-900">
                              Amount :
                              <label className="text-lg text-bold font-medium leading-6 text-gray-900">
                                {props.amount}
                              </label>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 sm:ml-3 sm:w-auto sm:text-sm"
                    // onClick={() => setOpen(false)}
                    onClick={props.close}
                  >
                    BACK TO MENU
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
