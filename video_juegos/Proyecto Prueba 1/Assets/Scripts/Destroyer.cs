/*
 * Elimina el prefab al contacto
 */
using UnityEngine;

public class Destroyer : MonoBehaviour
{
    private void OnCollisionEnter2D(Collision2D collision){
        Destroy(collision.gameObject);
        //print(gameObject.name);
    }

    private void OnTriggerEnter2D(Collider2D collision){
        Destroy(collision.gameObject);
        //print(gameObject.name);
    }
}
