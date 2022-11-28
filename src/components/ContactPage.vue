<template>
  <section>
    <div class="container-lg text-center mt-5">
      <h2 class="lead">To contact us please fill out the form below:</h2>
    </div>
    <div class="row justify-content-center my-5">

      <div class="col-md-6">
        <form>
          <label for="email" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="email" placeholder="email...">
        <label for="name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="enter your name...">
      
          <label for="subject" class="form-label">What is your query about?</label>
          <select class="form-select" id="subject">
            <option value="pricing" selected>Pricing query</option>
            <option value="content">Content query</option>
            <option value="other">Other query</option>
          </select>

          <label for="query" class="form-label">Your query...</label>
          <textarea class="textarea form-control" id="query"></textarea>
      
          <button class="btn btn-secondary mt-2" type="submit">Submit</button>
        </form>
      </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.textarea {
  height: 120px;
}

</style>