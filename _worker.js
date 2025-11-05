export default {
  async fetch(request, env, ctx) {
    // You can view your logs in the Observability dashboard
    console.info({ message: 'Hello World Worker make by github' }); 
    return new Response('Hello World from github V3 ..');
  }
};
