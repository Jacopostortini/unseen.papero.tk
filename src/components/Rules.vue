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
          The game begins with all the detectives being randomly placed amongst the map. MisterX is placed at a secret stop, only known to him.
          <br>
          Each turn begins with MisterX's move. The players move around the map, using the chosen public transport.
          <br>
          The colours of the station indicate what means of transport stop at that station.
          <br>
          Everytime you move, you use a ticket. Once you have finished a certain type of ticket, you can no longer use that mean of transport.
          <br>
          After MisterX's move, the mean of transport he uses is placed on the blackboard. There are, however, what are called "Revelation Turns". That's when MisterX position is revealed (these turns are circled on the black board).
          <br>
          MisterX has unlimited tickets of every type, in addition to some special tickets.
          <br>
          2X DoubleTurn: MisterX can play twice in a row.
          <br>
          2X SecretMove: MisterX can decide not to reveal the mean of transport he used, and use a secret move.
          <br>
          <br>
          Some further rules:<br>
          <ul>
            <li>It is not possible to place yourself on the same station as another detective at the same time;</li>
            <li>During your turn  you can not decide whether to move or not;</li>
            <li>the game ends when MisterX is caught (a detective is at the same stop as MisterX's), or MisterX outplays the detectives by not being caught until the end of the match (24 turns).</li>
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
$width: 70%;
$height: 80%;
$padding: 5%;
$top: 5%;
$right: 10%;

@media (max-width: 700px) {
  $width: 90%;
  $height: 92.5%;
  $padding: 2.5%;
  $top: 2.5%;
  $right: 2.5%;
}

.rules__main-panel{
  position: fixed;
  top: $icon-top;
  right: $icon-right;
  z-index: 6;

  .toggle-show-button{
    text-align: center;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    font-size: 200%;
    transition: all 0.5s;

    @media (max-width: 700px){
      font-size: 150%;
    }
  }

  .popup{
    position: fixed;
    top: $top;
    right: $right;
    width: $width;
    height: $height;
    background-color: white;
    overflow-y: scroll;
    padding: 0 $padding $padding $padding;
    transition: all 1s ease;
    transform-origin: top right;

    strong{
      position: sticky;
      float: right;
      top: 5%;
      transition: all 0.5s;
      font-size: 150%;
      user-select: none;
      cursor: pointer;

      &:hover{
        transform: rotate(90deg);
      }
    }

    h1{
      margin: 10px 0 20px 0;
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

  .rules-transition-enter-from,
  .rules-transition-leave-to{
    transform: scale(0);
    top: calc(#{$icon-top} + 16px);
    right: calc(#{$icon-right} + 16px);
  }
}
</style>