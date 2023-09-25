<template>
  <header class="auth-header">
    <div class="container container-fw flex-row auth-header__container">
      <router-link :to="{name: 'landing'}">
        <img src="../../../img/header__logo.svg" class="auth-header__logo" alt="Maran Bet"/>
      </router-link>

      <router-link :to="{name: 'landing'}" class="t1_medium auth-header__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.4714 10.8047C9.73175 10.5444 9.73175 10.1223 9.4714 9.86193L7.60948 8L9.4714 6.13807C9.73175 5.87772 9.73175 5.45561 9.4714 5.19526C9.21106 4.93491 8.78895 4.93491 8.5286 5.19526L6.19526 7.5286C5.93491 7.78894 5.93491 8.21105 6.19526 8.4714L8.5286 10.8047C8.78894 11.0651 9.21105 11.0651 9.4714 10.8047Z"
                fill="#777E91"/>
        </svg>
        {{ $t('Go back to the main page') }}
      </router-link>
    </div>
  </header>
</template>
