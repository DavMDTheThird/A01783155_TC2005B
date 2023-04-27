using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SineMovement : MonoBehaviour
{
    [SerializeField] float amplitude;
    [SerializeField] float speed;

    float angle;
    Vector3 origin;

    void Start(){
        origin = transform.position;
    }

    void Update()
    {
        transform.position = origin + 
                            new Vector3 (Mathf.Sin(angle) * amplitude,0,0);    
        // origin es el espacio original en el que estaba.
        angle += speed * Time.deltaTime;    
    }
}
