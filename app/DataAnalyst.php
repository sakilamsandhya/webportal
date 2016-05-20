<?php namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;


//use Eloquent;
use Validator;

class DataAnalyst extends Model implements AuthenticatableContract, CanResetPasswordContract {

    use Authenticatable, CanResetPassword;

    protected $table = 'data_analysts';

    protected $fillable = ['id', 'name', 'email', 'password'];

    protected $hidden = ['password', 'remember_token'];

  
    public static function validateFileUpload($params)
    {
        $rules = array(
            'id' => 'required',
            'report' => 'required',
            'file' => 'required'
        );

        $validator = Validator::make($params, $rules);

        return $validator;
    }

}