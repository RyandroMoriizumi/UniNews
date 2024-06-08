import { FastifyRequest, FastifyReply } from 'fastify';

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  
    console.log('User:', request.user);
    
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' });
  }
}
