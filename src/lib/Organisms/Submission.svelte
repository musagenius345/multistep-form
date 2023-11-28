<script>
  import src from '/images/icon-thank-you.svg'
</script>

<div class="container grid">
  <div>
    <img width="200" height="200" {src} alt="Thank you icon">
    <h2>Thank You!</h2>
   <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
  </div>
</div>

<style>
  div{
    text-align: center;
  }
  .grid{
    display: grid;
    place-items: center;
  }
  h2{
    /* --font-size: 1.8rem; */
    color: var(--marine-blue);
    margin: .6em 0;
  }
  p{
    --font-size: 1.3rem;
  }

  @media (max-width: 575px){
    div{
      margin-block: 2.5rem;
    }
  }
</style>
