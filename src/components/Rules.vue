<template>
  <div class="rules__main-panel">
    <div class="toggle-show-button" @click="show=!show">?</div>
    <transition name="rules-transition">
      <div class="popup" v-if="show">
        <strong @click="show=false">&#xd7;</strong>
        <h1>Unseen</h1>
        <div>
          <h4>22 turns, detectives against the unseen MisterX, will he be caught?</h4>
          <br><br>
          The game begins with all the detectives being randomly placed throughout the map. MisterX is placed at a secret stop, only known to him.
          <br>
          Everty turn, which begins with the move of MisterX, all the players move around the map, using the public transport.
          <br>
          The color of the stations indicate what means of transport stop at that station.
          <br>
          Everytime you move, you use a ticket, once you have finished a certain type of ticket you can no longer use that mean of transport.
          <br>
          Every turn after MisterX has moved, the mean of transport he has used is placed on the black board. There are, however, what are called "Revelation Turns", that's when MisterX position is revealed (these turn are circled on the black board).
          <br>
          MisterX has unlimited tickets of every type, in addition to some special tickets.
          <br>
          2X DoubleTurn: misterX can play twice in a row.
          <br>
          2X SecretMove: MisterX can decide not to reveal the mean of transport he used, and use a secret move.
          <br>
          <br>
          Some further rules:<br>
          <ul>
            <li>no detectives can be at the same station at the same time;</li>
            <li>every turn everyone has to move, you can not decide not to move;</li>
            <li>The game ends when misterX is caught (a detective is at the same stop as Mister X's), or MisterX outplays the detectives by not being caught for 24 turns.</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>

$icon-right: 20px;
$icon-top: 20px;

.rules__main-panel{
  position: fixed;
  top: $icon-top;
  right: $icon-right;

  .toggle-show-button{
    text-align: center;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    font-size: 200%;
    transition: all 0.5s;
  }

  .popup{
    position: fixed;
    top: 5%;
    right: 10%;
    width: 70%;
    height: 80%;
    background-color: white;
    overflow-y: scroll;
    padding: 0 5% 5% 5%;

    strong{
      position: sticky;
      float: right;
      top: 5%;
      transition: all 0.5s;
      font-size: 150%;
      cursor: pointer;

      &:hover{
        transform: rotate(90deg);
      }
    }

    h1{
      text-align: center;
      font-family: Eutemia;
      font-weight: normal;
      font-size: 300%;
    }

    h4{
      text-align: center;
      margin: 0;
    }
  }

  .rules-transition-enter-active,
  .rules-transition-leave-active {
    transition: all 1s ease;
    transform-origin: top right;
  }

  .rules-transition-enter-from,
  .rules-transition-leave-to{
    transform: scale(0);
    top: $icon-top;
    right: $icon-right;
  }
}
</style>