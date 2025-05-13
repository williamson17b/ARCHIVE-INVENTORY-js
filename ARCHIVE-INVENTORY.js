<script type="text/javascript">
const scriptURL = "https://script.google.com/macros/s/AKfycbzXje8_d2laFhsSR-qXM_zwOsyvCApFZUlRI0KEM0v2NnO9cMAJLffniMZT9DQuRHyylw/exec";

fetch(scriptURL)
  .then(res => res.json())
  .then(data => {
    console.log("Fetched zines:", data);
    document.body.insertAdjacentHTML('beforeend', `<pre>${JSON.stringify(data[0], null, 2)}</pre>`);
  })
  .catch(err => {
    console.error("Fetch failed:", err);
    document.body.insertAdjacentHTML('beforeend', `<p>Fetch error: ${err}</p>`);
  });
</script>
