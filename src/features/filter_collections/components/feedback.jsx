import { postFeedback } from "@/repository/analytics/feedback/feedback_repository";
import { Listbox, Transition } from "@headlessui/react";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Fragment, useState } from "react";

const moods = [
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },

  {
    name: "Not useful",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Feedback() {
  const [selected, setSelected] = useState(moods[2]);
  const [feedback, setFeedback] = useState("test");
  const [mood, setMood] = useState("not useful");

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex h-[35px] items-center justify-center  rounded-lg border bg-white px-[15px] font-medium leading-none text-slate-500 shadow-md  hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Feedback
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
            Feedback
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal text-mauve11">
            Your feedback is EXTREMELY important!
          </Dialog.Description>
          <div className="flex items-start space-x-4">
            <div className="min-w-0 flex-1">
              <form
                action="#"
                className="relative"
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   postFeedback(
                //     JSON.stringify({ comment: feedback, mood: mood }),
                //   );
                // }}
              >
                <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label htmlFor="comment" className="sr-only">
                    Add your comment
                  </label>
                  <textarea
                    rows={3}
                    name="comment"
                    id="comment"
                    className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Add your comment..."
                    defaultValue={""}
                    onChange={(e) => setFeedback(e.target.value)}
                  />

                  {/* Spacer element to match the height of the toolbar */}
                  <div className="py-2" aria-hidden="true">
                    {/* Matches height of button in toolbar (1px border + 36px content height) */}
                    <div className="py-px">
                      <div className="h-9" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="sr-only">
                              Your mood
                            </Listbox.Label>
                            <div className="relative">
                              <Listbox.Button className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                <span className="flex items-center justify-center">
                                  {selected.value === null ? (
                                    <span>
                                      <FaceSmileIcon
                                        className="h-5 w-5 flex-shrink-0"
                                        aria-hidden="true"
                                      />
                                      <span className="sr-only">
                                        Add your mood
                                      </span>
                                    </span>
                                  ) : (
                                    <span>
                                      <span
                                        className={classNames(
                                          selected.bgColor,
                                          "flex h-8 w-8 items-center justify-center rounded-full",
                                        )}
                                      >
                                        <selected.icon
                                          className="h-5 w-5 flex-shrink-0 text-white"
                                          aria-hidden="true"
                                        />
                                      </span>
                                      <span className="sr-only">
                                        {selected.name}
                                      </span>
                                    </span>
                                  )}
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                  {moods.map((mood) => (
                                    <Listbox.Option
                                      key={mood.value}
                                      className={({ active }) =>
                                        classNames(
                                          active ? "bg-gray-100" : "bg-white",
                                          "relative cursor-default select-none px-3 py-2",
                                        )
                                      }
                                      value={mood}
                                      onClick={() => setMood(mood.name)}
                                    >
                                      <div className="flex items-center">
                                        <div
                                          className={classNames(
                                            mood.bgColor,
                                            "flex h-8 w-8 items-center justify-center rounded-full",
                                          )}
                                        >
                                          <mood.icon
                                            className={classNames(
                                              mood.iconColor,
                                              "h-5 w-5 flex-shrink-0",
                                            )}
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <span className="ml-3 block truncate font-medium">
                                          {mood.name}
                                        </span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Dialog.Close asChild>
                      <button
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={(e) => {
                          // e.preventDefault();
                          postFeedback(
                            JSON.stringify({ comment: feedback, mood: mood }),
                          );
                        }}
                      >
                        Post
                      </button>
                    </Dialog.Close>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-[25px] flex justify-end"></div>
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
