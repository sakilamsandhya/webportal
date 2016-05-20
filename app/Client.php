<?php  namespace App;

use Eloquent;
use Validator;


class Client extends Eloquent{

    protected $table = 'clients';

    protected $fillable = ['id', 'name', 'email', 'password', 'report_name', 'folder_name'];

    protected $hidden = ['password', 'remember_token'];

    public static function validate($params)
    {
        $rules = array(
            'name' => 'required',
            'password' => 'required|min:8',
            'email' => 'required|email|unique:clients'
        );

        $validator = Validator::make($params, $rules);

        return $validator;
    }


}
