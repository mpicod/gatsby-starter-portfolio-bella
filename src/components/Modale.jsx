import React, { Component } from "react";

const Modale = props => {
  return (
    <>
      <div
        class={`fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0  sm:items-center sm:justify-center ${
          props.isOpen ? "sm:flex" : "hidden"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div x-show="open" class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          x-show="open"
          class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100">
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <div class="mt-3 sm:mt-5">
              <h3 class="text-lg text-center leading-6 font-medium text-gray-900">
                Bienvenu sur ZenOps.fr
              </h3>
              <div class="mt-2">
                <p class="text-xsm text-gray-500">
                  Le cloud a bouleversé le marché de l’informatique apportant de
                  nouvelles opportunités et des nouveaux modèles en matière de
                  services. <br />
                  <br />
                  Les process opérationnels d’exploitation s’invitent dans les
                  développements (DevOps), dans la mise en œuvre de la sécurité
                  (SecOps), les budgets s’élaborant sous de multiples dimensions
                  (FinOps). <br />
                  Pour mieux vous aider et fort de nos 20 ans d’expérience, nous
                  avons repensé nos méthodes et services ainsi que notre
                  démarche Qualité. PRESTIGE RESEAUX devient ZenOps. Nos
                  coordonnées téléphoniques restent les mêmes.
                  <br /> <br /> Bonne visite sur notre nouveau site.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <span class="flex w-full rounded-md shadow-sm">
              <button
                onClick={props.onClick}
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Wow super !
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modale;
