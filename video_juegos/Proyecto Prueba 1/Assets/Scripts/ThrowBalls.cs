using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowBalls : MonoBehaviour
{
    public GameObject ball;
    public float delay;
    public float limit;

    void Start()
    {
        InvokeRepeating("CreateBall", delay, delay);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void CreateBall(){
        Vector3 newPos =  new Vector3(Random.Range(-limit, limit),
                                       6.5f, 0);

        Instantiate(ball, newPos, Quaternion.identity);
    }

}
