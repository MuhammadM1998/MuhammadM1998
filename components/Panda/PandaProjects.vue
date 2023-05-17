<template>
  <div>
    <div class="panda">
      <div class="ears">
        <div class="left" />
        <div class="right" />
      </div>

      <div class="face">
        <div class="eyes">
          <div class="left">
            <div class="eye" />
          </div>

          <div class="right">
            <div class="eye" />
          </div>
        </div>

        <div class="nose" />

        <div class="mouth">
          <div class="left" />
          <div class="right" />
        </div>
      </div>

      <div class="body">
        <div class="arms" />
        <div class="legs" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $panda: #ebebeb;
  $done: #3e3e3e;
  $dtwo: #231d1d;
  $eye: #ffc969;

  @mixin colors {
    border: 1px solid $dtwo;
    background-color: $done;
    background-image: radial-gradient(circle at 50% 100%, $done, $dtwo);
  }

  .panda {
    margin: 0 auto;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 180px;
    border-radius: 40%;
    cursor: pointer;
  }

  .ears {
    position: absolute;
    top: -50px;
    z-index: -1;
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;

    .left,
    .right {
      width: 40px;
      height: 40px;
      @include colors;
      box-shadow: inset 0 -5px 10px darken($done, 22%);
    }
    .left {
      border: 1px solid #000;
      border-radius: 54% 46% 31% 69% / 56% 73% 27% 44%;
    }
    .right {
      border: 1px solid #000;
      border-radius: 29% 71% 72% 28% / 77% 64% 36% 23%;
      transform-origin: 0% 100%;
      animation: ears 5s cubic-bezier(0.06, 0.63, 0.91, 0.66) 2s infinite;
    }
  }

  .face {
    display: flex;
    width: 180px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    background: white;

    .eyes {
      display: flex;
      width: 90%;
      height: 100px;
      justify-content: space-around;
      align-items: center;

      .left,
      .right {
        display: flex;
        width: 70px;
        height: 70px;
        justify-content: center;
        align-items: center;
        @include colors;
        border-radius: 50% 20% 50% 40%;

        .eye {
          position: relative;
          width: 45px;
          height: 45px;
          background-color: $panda;
          border-radius: 50%;

          &::before {
            position: absolute;
            top: 5px;
            left: 5px;
            content: '';
            width: 35px;
            height: 35px;
            @include colors;
            border-radius: inherit;
            box-shadow: inset 0 0px 20px darken($done, 22%);
          }

          &::after {
            position: absolute;
            top: 5px;
            left: 5px;
            content: '';
            width: 15px;
            height: 15px;
            border-radius: inherit;
            background-color: $panda;
          }
        }
      }
      .right {
        border-radius: 20% 50% 40% 50%;
      }
    }
    .nose {
      position: relative;
      z-index: 1;
      width: 40px;
      height: 20px;
      border-radius: 20% 20% 50% 50%;
      @include colors;

      &::before {
        position: absolute;
        content: '';
        top: 2px;
        left: 2px;
        transform: rotate(-10deg);
        width: 10px;
        height: 4px;
        border-radius: 40%;
        background-color: $panda;
      }
    }
    .mouth {
      display: flex;
      width: 80px;
      height: 20px;
      justify-content: center;
      align-items: center;

      .right,
      .left {
        position: relative;
        width: 50px;
        height: 35px;
        border: 3px solid $done;
        border-radius: 50% 30% 50% 40%;

        &::after {
          position: absolute;
          top: -3px;
          left: -20px;
          content: '';
          width: 50px;
          height: 30px;
          border-radius: inherit;
          background-color: #fff;
          background: radial-gradient($done 11%, transparent 11%), white;
          background-position: 0 0, 26px 26px;
          background-size: 26px 26px;
          transition: all 0.2s linear;
        }
      }

      .right {
        border-radius: 30% 50% 40% 50%;

        &::after {
          left: 4px;
        }
      }
    }
    &:hover {
      .eye {
        animation: eye 100ms linear infinite;

        &::before,
        &::after {
          animation: eye 100ms linear infinite;
        }

        &::before {
          animation-delay: 0.3s;
        }
      }
      .mouth {
        .right,
        .left {
          &::after {
            height: 20px;
          }
        }
      }
    }
  }

  @keyframes eye {
    50% {
      transform: translate(0.6px, -0.5px);
    }
  }

  @keyframes ears {
    20% {
      transform: rotate(10deg);
    }
    21% {
      transform: rotate(-5deg);
    }
    22% {
      transform: rotate(15deg);
    }
  }
</style>
