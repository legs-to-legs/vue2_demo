
<script>
export default {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    console.log('path==', path)
    this.$router.push({ path: "/" + path, query });
  },
  render: function (h) {
    return h();
  },
};
</script>