<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <h1>{{ author }} </h1>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "two two two"
    }
  }
}
</script>