/**
 * @swagger
 * /history:
 *   get:
 *     summary: Obtiene todos los registros de historial médico
 *     responses:
 *       200:
 *         description: Lista de registros de historial médico
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   users_id:
 *                     type: integer
 *                     example: 2
 *                   blood_type:
 *                     type: string
 *                     example: O+
 *                   diseases:
 *                     type: string
 *                     example: Diabetes
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-18T12:00:00Z
 *       404:
 *         description: No se encontraron registros de historial médico
 *       500:
 *         description: Error en el servidor
 */
/**
 * @swagger
 * /history/{item_valueid}:
 *   get:
 *     summary: Obtiene los registros de historial médico para un usuario específico
 *     parameters:
 *       - in: path
 *         name: item_valueid
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de registros de historial médico para el usuario especificado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   users_id:
 *                     type: integer
 *                     example: 2
 *                   blood_type:
 *                     type: string
 *                     example: O+
 *                   diseases:
 *                     type: string
 *                     example: Diabetes
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-18T12:00:00Z
 *       404:
 *         description: No se encontraron registros de historial médico para este usuario
 *       500:
 *         description: Error en el servidor
 */