"use client";
import { filters } from "@/constants/collection_filters";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { useCollectionsFilter } from "../context/filter_collections_context";
import { Checkbox } from "./checkbox";
import { Feedback } from "./feedback";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filters({ children, likesCount }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likesCount);

  const { compostiteFilter, setCompositeFilter } = useCollectionsFilter();

  useEffect(() => {
    const compostiteFilter = JSON.parse(
      sessionStorage.getItem("compostiteFilter"),
    );

    if (compostiteFilter) {
      setCompositeFilter(compostiteFilter);
    }
  }, [setCompositeFilter]);

  useEffect(() => {
    sessionStorage.setItem(
      "compostiteFilter",
      JSON.stringify(compostiteFilter),
    );
  }, [compostiteFilter]);

  useEffect(() => {
    const liked = JSON.parse(sessionStorage.getItem("liked"));

    if (liked) {
      setLiked(liked);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  async function updateLikes() {
    const res = await fetch(
      "https://cs2-utility-analytics.onrender.com/likes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: liked ? likesCount : likesCount + 1 }),
      },
    );
    setLikes(liked ? likesCount : likesCount + 1);
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform",
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <Checkbox
                                    key={option.value}
                                    section={section}
                                    option={option}
                                    optionIdx={optionIdx}
                                  />
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between border-b border-gray-200 pb-10">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Counter-Strike 2 Utilities
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Struggle to learn utilities from short videos?<br></br> Check
                the most effective CS 2 utility combos in a convenient format.
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-start rounded-lg border p-4 text-slate-700">
                <h3>
                  Want more collections?<br></br>Than Like and send feedback!
                </h3>
                <div className="mt-2 flex flex-row items-center">
                  <Feedback />
                  <button
                    type="button"
                    onClick={() => {
                      setLiked(!liked);
                      updateLikes();
                    }}
                    className={`ml-3 mr-2 inline-flex items-center rounded-lg border p-2.5 text-center text-sm font-medium shadow-md
                    ${liked ? "bg-yellow-400" : "bg-white"} ${
                      liked ? "text-white" : "text-yellow-400"
                    } 

                     hover:bg-yellow-400 hover:text-white `}
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                    </svg>
                  </button>
                  <h2>{likes}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <Checkbox
                              key={option.value}
                              sectionId={section.id}
                              section={section}
                              option={option}
                              optionIdx={optionIdx}
                            />
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
