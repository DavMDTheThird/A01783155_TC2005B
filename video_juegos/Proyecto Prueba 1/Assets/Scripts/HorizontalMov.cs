/*
 * Movimiento horizontal del tablero
 */

using UnityEngine;

public class HorizontalMov : MonoBehaviour{

    Vector3 move;

    [SerializeField] float speed;
    [SerializeField] float limit;

    void Start(){
        
    }
    void Update(){
        move.x = Input.GetAxis("Horizontal");

        if(transform.position.x < -limit && move.x < 0){
            move.x = 0;
        }
        else if (transform.position.x > limit && move.x > 0){
            move.x = 0;
        }

        transform.Translate(move * speed * Time.deltaTime);
    }
}
