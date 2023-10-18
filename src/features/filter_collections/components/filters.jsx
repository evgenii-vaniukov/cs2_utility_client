"use client";
import { Feedback } from "@/components/feedback";
import { filters } from "@/constants/collection_filters";
import { updateLikesCount } from "@/repository/analytics/likes/likes_repository";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { useCollectionsFilter } from "../context/filter_collections_context";
import { Checkbox } from "./checkbox";

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
    const res = await updateLikesCount({
      count: liked ? likesCount : likesCount + 1,
    });
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
          <div className="flex flex-col border-b border-gray-200 pb-10 md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl font-bold tracking-tight text-slate-700 md:text-4xl">
                Counter-Strike 2 Utilities
              </h1>
              <div className="mt-4 flex w-11/12 flex-col items-start text-base text-gray-500">
                <p>Struggle to learn utilities from short videos?</p>
                <div className="mt-2"></div>
                <p>
                  Check the most effective CS 2 utility combos in a convenient
                  format.
                </p>
                <a
                  href="https://discord.gg/MmZda7MKEy"
                  target="_blank"
                  className="flex w-1/12 flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                  >
                    <radialGradient
                      id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1"
                      cx="24"
                      cy="10.009"
                      r="32.252"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#8c9eff"></stop>
                      <stop offset=".368" stop-color="#889af8"></stop>
                      <stop offset=".889" stop-color="#7e8fe6"></stop>
                      <stop offset="1" stop-color="#7b8ce1"></stop>
                    </radialGradient>
                    <path
                      fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)"
                      d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"
                    ></path>
                    <ellipse
                      cx="30.5"
                      cy="26"
                      opacity=".05"
                      rx="4.5"
                      ry="5"
                    ></ellipse>
                    <ellipse
                      cx="30.5"
                      cy="26"
                      opacity=".05"
                      rx="4"
                      ry="4.5"
                    ></ellipse>
                    <ellipse
                      cx="30.5"
                      cy="26"
                      fill="#fff"
                      rx="3.5"
                      ry="4"
                    ></ellipse>
                    <ellipse
                      cx="17.5"
                      cy="26"
                      opacity=".05"
                      rx="4.5"
                      ry="5"
                    ></ellipse>
                    <ellipse
                      cx="17.5"
                      cy="26"
                      opacity=".05"
                      rx="4"
                      ry="4.5"
                    ></ellipse>
                    <ellipse
                      cx="17.5"
                      cy="26"
                      fill="#fff"
                      rx="3.5"
                      ry="4"
                    ></ellipse>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mx-2 my-4 flex flex-col items-center justify-center rounded-lg border p-4 text-slate-700 md:mx-0">
              <h3>
                Want to see more collections?<br></br>Then Like and send
                feedback!
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
                    } `}
                >
                  <svg
                    className="h-5 w-5"
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
